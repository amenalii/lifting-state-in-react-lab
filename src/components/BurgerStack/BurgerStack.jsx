const BurgerStack = (props) => {
    return <ul>
        {props.ingredients.map((ingredient, index) => {
            return (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => props.removeFromBurger(ingredient)}>X</button>
            </li>
            );
        })}
    </ul>;
  };
  
  export default BurgerStack;
  