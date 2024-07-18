const DessertsList = ({ data }) => {
    const lowCaloriesDesserts = data
        .filter(dessert => dessert.calories <= 500)
        .sort((a, b) => a.calories - b.calories)
        .map ((dessert, index) => <li key={index}>{dessert.name} - {dessert.calories} cal</li>);

    return (
        <ul>
            {
                lowCaloriesDesserts
            }
        </ul>
    );
}

export default DessertsList;