import "./style.css";

const Buttons = ({tasks, hideDone}) => {
    if(tasks.length === 0) {
        return null;
    }
    
    return (
        <div className=" buttons__button">
            <button className="buttons__button ">
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
            className="buttons__button"
            disabled={tasks.every(({ done }) => done)}
            
           
            
        >
            Ukończ wszystkie
        </button>
        </div>
    )
};

export default Buttons;

/*
const Buttons = ({ tasks, hideDone }) => (
        <div className=" buttons__button">
            {tasks.length > 0 && (
            <React.Fragment>
                <button className="buttons__button ">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
            </React.Fragment>
            )}
        </div>
);

export default Buttons;*/