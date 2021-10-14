import mapboxgl           from '!mapbox-gl'
import {MAPBOX_PUBLIC}    from 'config/variables'
import React, {useEffect} from 'react'
import Div                from 'shared/Basic/Div'
/* eslint import/no-webpack-loader-syntax: off */

const Map = ({lon, lat, zoom = 14, style = 'mapbox://styles/mapbox/light-v10', features, theme}) => {
    useEffect(() => {
        if (!!lon && !!lat && !features) {
            mapboxgl.accessToken = MAPBOX_PUBLIC
            const map = new mapboxgl.Map({
                container: 'map', // container id
                style: style, // style URL
                center: [lon, lat], // starting position [lng, lat]
                zoom: zoom // starting zoom
            });

            new mapboxgl.Marker()
                .setLngLat([lon, lat])
                .addTo(map)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lon, lat])



    function buildLocationList({ features }, map) {
        for (const { properties } of features) {
            /* Add a new listing section to the sidebar. */
            const listings = document.getElementById('listings');
            const listing = listings.appendChild(document.createElement('div'));
            /* Assign a unique `id` to the listing. */
            listing.id = `listing-${properties._id}`;
            /* Assign the `item` class to each listing for styling. */
            listing.className = 'item';

            /* Add the link to the individual listing created above. */
            const link = listing.appendChild(document.createElement('a'));
            link.href = '#';
            link.className = 'title';
            link.id = `link-${properties._id}`;
            link.innerHTML = `${properties.address}`;

            console.log('link', link)

            link.addEventListener('click', function () {
                for (const feature of features) {
                    if (this.id === `link-${feature.properties._id}`) {
                        flyToStore(feature, map);
                        createPopUp(feature, map);
                        console.log('HIIII', feature)
                        console.log('map', map)
                    }
                }
                const activeItem = document.getElementsByClassName('active');
                if (activeItem[0]) {
                    activeItem[0].classList.remove('active');
                }
                this.parentNode.classList.add('active');
            });

            /* Add details to the individual listing. */
            const details = listing.appendChild(document.createElement('div'));
            details.innerHTML = `${properties.city}`;
            if (properties.phone) {
                details.innerHTML += ` · ${properties.phoneFormatted}`;
            }
            if (properties.distance) {
                const roundedDistance = Math.round(properties.distance * 100) / 100;
                details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
            }

        }
    }

    function flyToStore(currentFeature, map) {
        map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
        });
    }

    function createPopUp(currentFeature, map) {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        /** Check if there is already a popup on the map and if so, remove it */
        if (popUps[0]) popUps[0].remove();

        const popup = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML(`<h4>${currentFeature.properties.address}</h4>`)
            .addTo(map);
    }


    useEffect(() => {
        if (!!features && !!lon && !!lat) {
            console.log('feature called')
            mapboxgl.accessToken = MAPBOX_PUBLIC
            const map = new mapboxgl.Map({
                container: 'map', // container id
                style: style, // style URL
                center: [parseInt(lon), parseInt(lat)], // starting position [lng, lat]
                zoom: zoom // starting zoom
            });

            map.on('load', () => {
                map.addLayer({
                    id: 'locations',
                    type: 'circle',
                    /* Add a GeoJSON source containing place coordinates and information. */
                    source: {
                        type: 'geojson',
                        data: features
                    }
                })
                map.on('click', ({ point }) => {
                    /* Determine if a feature in the "locations" layer exists at that point. */
                    const features = map.queryRenderedFeatures(point, {
                        layers: ['locations']
                    });

                    /* If it does not exist, return */
                    if (!features.length) return;

                    const clickedPoint = features[0];

                    console.log('clicked', clickedPoint)

                    /* Fly to the point */
                    flyToStore(clickedPoint, map);

                    /* Close all other popups and display popup for clicked store */
                    createPopUp(clickedPoint, map);

                    /* Highlight listing in sidebar (and remove highlight for all other listings) */
                    const activeItem = document.getElementsByClassName('active');
                    if (activeItem[0]) {
                        activeItem[0].classList.remove('active');
                    }
                    const listing = document.getElementById(
                        `listing-${clickedPoint.properties._id}`
                    );
                    listing.classList.add('active');
                });
                buildLocationList(features, map);
            })
        }

    }, [])

    return (
        <Div
            id="map"
            theme={theme}
        />
    )
}

Map.defaultProps = {
    theme: {position: 'absolute', top: 0, bottom: 0, left: 0, width: '100%'}
}

export default Map
