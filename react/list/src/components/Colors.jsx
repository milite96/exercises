import Color from "./Color"
const colorsArray = [
    {
        name: "blue",
        id: "1"
    },
    {
        name: "red",
        id: "2"
    }
]

function Colors({ colors = colorsArray }) {
    return (
        <ul className="noTextDecoration">
            {colors.map((color, index) => {
                return <li className={color.name} key={index}><Color color={color}/></li>
            
    })}
        </ul>
    )
}

export default Colors
