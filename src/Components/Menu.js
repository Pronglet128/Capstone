import MenuCard from "./MenuCard";
import data from "../MenuData";

const Menu=() => {
    return (
        <>
        <h2 className="hMenu">Menu</h2>
                <main className="menu">
                    {data.map((menuData) => (
                        <MenuCard
                            key={menuData.key}
                            price={menuData.price}
                            img={menuData.img}
                            name={menuData.name}
                            text={menuData.text}
                        />
                    ))}
                </main>
        </>
    )
};

export default Menu;