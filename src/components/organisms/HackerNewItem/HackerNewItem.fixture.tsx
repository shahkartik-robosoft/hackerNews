import * as React from "react";
import HackerNewItem, {IHackerNewItem} from "./HackerNewItem";

export const hackerNewItems: Array<IHackerNewItem> = [
    {
        itemLabel: "Data Structures and Algorithms I Used Working at Tech Companies",
        source: "pragmaticengineer.com",
        noOfPoints: 23,
        pointsBy: "signa11",
        time: "23 hours",
        noOfComments: 56,
    },
    {
        itemLabel: "Riot is now Element",
        source: "element.io",
        noOfPoints: 12,
        pointsBy: "Jur_445",
        time: "2 min",
        noOfComments: 23,
    },
    {
        itemLabel: "You've only added two lines – why did that take two days?",
        source: "mrlacey.com",
        noOfPoints: 45,
        pointsBy: "ajit_44",
        time: "198 min",
        noOfComments: 32,
    }
]

const HackerNewItemCosmos = () => <HackerNewItem hackerNewItems={hackerNewItems} activePage={2} />;

export default HackerNewItemCosmos;