

import Meals from "@/components/Meals";
import styles from "./styles.module.css";

export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals Page",
};

const mealsPage = () => {



    return (
        <div className="p-12 mx-auto">
            <h1 className="text-3xl font-semibold">Choose your Meals</h1>
            <p className={styles.font_green}>Choose meals of your choice by searching...</p>
            <Meals></Meals>
            
        </div>
    );
};

export default mealsPage;