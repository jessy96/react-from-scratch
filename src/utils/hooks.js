import { useContext, useEffect, useRef, useState } from "react"

export const useModal = (show = false) => {
    const [showModal, setShowModal] = useState(show)
    const toggle = () => setShowModal(!showModal)
    return showModal, toggle
}

export const useContextMenu = () => {
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [showContextMenu, toggleContextMenu] = useModal()

    const innerRef = useRef(null)

    useEffect(() => {
        function handleContextMenu(event) {
            event.preventDefault();
            setAnchorPoint({ x: event.pageX, y: event.pageY });
            toggleContextMenu();
        }
        const div = innerRef.current;
        div.addEventListener("contextmenu", handleContextMenu);    
        return () => {
          div.removeEventListener('contextmenu', handleContextMenu);
        };
    }, [])
    return showContextMenu, toggleContextMenu, anchorPoint
}
