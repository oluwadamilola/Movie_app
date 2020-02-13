import Characters from "../components/characters/Characters";
import Character from "../components/character/Character";
import Episode from "../components/episodes/Episode";

const routes = [
    { path: "/", component: Characters },
    {
        path: "/character/:characterID",
        component: Character
    },
    {
        path: "/episodes",
        component: Episode
    }
];
export default routes