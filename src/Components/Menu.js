import MenuCard from "./MenuCard";
import allMenu from "../MenuData";

const Menu=() => {
    return (
        <>
        <h2 className="h2_pages">Menu</h2>
                <main className="menu">
                    {allMenu.map((menuData) => (
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