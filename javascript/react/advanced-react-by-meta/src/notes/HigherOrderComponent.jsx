import { useEffect, useState } from "react";

const WithMousePosition = WrappedComponent => {
    return props => {

        const [mousePosition, setMousePosition] = useState({
            x: 0,
            y: 0,
        });

        useEffect(() => {
            const handleMousePositionChange = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                })
            };

            window.addEventListener("mousemove", handleMousePositionChange);

            return () => {
                window.removeEventListener("mousemove", handleMousePositionChange);
            };
        }, []);

        // What should be returned here?
        return <WrappedComponent {...props} mousePosition={mousePosition} />;
    };
};

// This component should not receive any props
const PanelMouseLogger = ({ mousePosition }) => {
    // The below if statement can be removed after the render props pattern is implemented
    if (!mousePosition) {
        return null;
    }
    return (
        <div className="BasicTracker">
            <p>Mouse position:</p>
            <div className="Row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};

// This component should not receive any props
const PointMouseLogger = ({ mousePosition }) => {
    // The below if statement can be removed after the render props pattern is implemented
    if (!mousePosition) {
        return null;
    }
    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    )
};

const Tracker1 = WithMousePosition(PanelMouseLogger);
const Tracker2 = WithMousePosition(PointMouseLogger);
function MousePositionTracker2() {
    return (
        <div className="MousePositionTracker">
            <header className="Header">Mouse Tracker 02</header>
            {/* <PanelMouseLogger />
      <PointMouseLogger /> */}
            <Tracker1 />
            <Tracker2 />
        </div>
    );
}

export default MousePositionTracker2;
