

const SelectmenuItem = ({ menu }: any) => {
    const { firstName, lastName } = menu?.user || {};
    return (
        <div>{`${firstName} ${lastName}`}</div>
    )
}

export default SelectmenuItem;
