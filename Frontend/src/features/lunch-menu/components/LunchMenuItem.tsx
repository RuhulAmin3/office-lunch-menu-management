
const LunchMenuItem = ({ menu }: any) => {
    console.log("menu", menu);
    return (
        <h3>{menu?.title}</h3>
    )
}

export default LunchMenuItem;