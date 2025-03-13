import ErrorMeesage from "../utils/errorMessage";
import Card from "./Card";

const DeleteCard = (games, id) => {
  const cards = document.querySelectorAll(".card");
  const main = document.querySelector("main");
  games.forEach((game) => {
    if (game.id === id) {
      games.splice(games.indexOf(game), 1);
      cards.forEach((card) => {
        card.remove();
      });
    }
  });
  games.map((game) => {
    Card(
      main,
      games,
      game.id,
      game.image,
      game.nom,
      game.description,
      game.genres
    );
  });
  ErrorMeesage(games);
};

export default DeleteCard;
