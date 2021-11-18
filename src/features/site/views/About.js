import React            from 'react'
import Div              from 'shared/Basic/Div'
import H2               from 'shared/Basic/H2'
import LinkSwitch       from 'shared/Basic/LinkSwitch'
import ContentWrapper   from 'shared/Layout/ContentWrapper'
import {aboutPageStyle} from './styles'

const About = () => {

    return (
        <ContentWrapper theme={aboutPageStyle}>
            <Div>
                <Div theme={aboutPageStyle.section}>
                    <H2>
                        Celebrating the places that celebrate you!
                    </H2>
                    <p>
                        Imagine a business whose sole purpose is to guide humanity towards a more inclusive world
                        through solidarity and equity
                        in practice. This is Inclusive Guide — the new digital Green Book, a website that’s been
                        described as
                        “Yelp for inclusivity”. Inclusive Guide is a user review platform created by two Black women
                        with a
                        mission to create data-driven, economic incentives for businesses to be more inclusive and
                        welcoming,
                        resulting in safer spaces for people who regularly experience discrimination.
                        Co-Founders Crystal Egli and Parker McMullen Bushman want to change the way businesses think
                        about inclusion.
                        On this digital platform, users aren’t rating the products they purchased or the cleanliness of
                        the store.
                        Instead, individuals can rate businesses and spaces on their customer service experience
                        relative to the users’
                        specific identities, such as race, ability, gender, and more. Inclusive Guide users can rate
                        businesses on a range of things,
                        such as courtesy of staff, ADA compliance, sense of personal safety, availability of gender
                        neutral bathrooms, and so on.
                        Individual users can also access the reviews of others who have rated those spaces to easily
                        identify locations that are safe and welcoming for them.
                        Combined, these user-sourced ratings generate ‘inclusivity scores’ for each business.
                        On the back end, business owners and managers can see the reviews and request data-driven
                        reports that are analyzed through
                        demographic breakdowns. Inclusive Guide doesn’t stop there-- businesses seeking to improve their
                        scores can also request customized
                        resources based on their unique reports in order to target the specific issues their customers
                        have reported.
                        Gathering, analyzing and reporting all of this data in conjunction with customized solutions and
                        recommendations
                        will provide businesses with the economic incentive to recruit and retain a diverse customer
                        base,
                        in turn allowing the users to plan their travels and conduct business with peace of mind,
                        and as a result we can utilize this platform’s unique position to help inform policy at the
                        highest levels.
                    </p>
                </Div>
                <Div theme={aboutPageStyle.section}>
                    <H2>Our Vision</H2>
                    <p>
                        A world where people are free of the impacts of discrimination and systemic oppression.
                    </p>
                </Div>
                <Div theme={aboutPageStyle.section}>
                    <H2>Our Mission</H2>
                    <p>
                        We guide humanity towards a more inclusive world through solidarity and equity in practice.
                    </p>
                </Div>
                <Div theme={aboutPageStyle.section}>
                    <H2>Press Room</H2>
                    <p>
                        <LinkSwitch url={'https://www.inclusivejourneys.com/press-room.html'}>Inclusive Guide
                            Press</LinkSwitch>
                    </p>
                </Div>
                <Div theme={aboutPageStyle.section}>
                    <H2>
                        Support the Guide
                    </H2>
                    <p>Inclusive Guide is powered by community. Please share the Guide with your network and help spread
                        the word. Share our story with your community using #InclusiveGuide.</p>
                    <p>Fundraising is also critical to continue our work to develop this much needed guide, especially
                        in light of the fact that just 1 percent of venture-backed startups have a Black founder.
                        In 2021, of the $147 billion in venture capital invested in U.S. startups, Black women
                        entrepreneurs received only 0.34 percent of these funds. As Black female founders ourselves,
                        we’re not letting these injustices stop us. With the help of so many amazing people and allies
                        we’ve met along the way, Inclusive Guide has raised over $87,000 through individual donations.
                    </p>
                    <p>
                        Your support has validated our resolve and belief that we need a way to support people that
                        experience discrimination,
                        while celebrating the businesses that value those that face these challenges everyday.
                        However, Inclusive Guide has reached a crossroads — <strong>we need additional support and funds
                        to launch this guide nationwide</strong>.
                        These funds are necessary to bring this resource to communities across America.
                         <LinkSwitch
                            url={'https://www.gofundme.com/f/digital-green-book-website'}
                            theme={{marginLeft: [5, 7, 5]}}
                         >
                             https://www.gofundme.com/f/digital-green-book-website
                         </LinkSwitch>
                    </p>
                </Div>
            </Div>

        </ContentWrapper>
    )
}

export default About
