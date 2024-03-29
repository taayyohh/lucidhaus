import {useEffect}   from "react"
import {useDispatch} from 'react-redux'

/**
 * Hook that alerts clicks outside of the passed ref
 */

export default function useOutsideAlerter(ref, action) {
    const dispatch = useDispatch()
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                dispatch(action)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, action, dispatch]);
}
