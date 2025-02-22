import React, { useState } from "react";
import '../../../assets/css/sports/sports.css';
import chess from '../../../assets/images/chess.jpg'
const Chess = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Q1. How many players play the game?",
      answer:
        "Chess is played between two players. Each player controls one set of pieces, either white or black, and they take turns making moves. The game is designed for just those two participants, although there are variants and online platforms where multiple players can participate in different formats.",
    },
    {
      question: "Q2. Strategy of the game.",
      answer:
        "The strategy of chess involves planning and executing moves to gain an advantage over your opponent. A solid opening strategy typically focuses on controlling the center of the board, developing your pieces efficiently, and ensuring the safety of your king, often through castling. As the game progresses into the middlegame, players aim to create strong positions, look for tactical opportunities, and capitalize on weaknesses in their opponent’s setup. This involves threats, sacrifices, and careful calculation to navigate complex positions. In the endgame, the focus shifts to promoting pawns and converting advantages into a win. Key principles include activating your king, coordinating pieces, and recognizing winning techniques like opposition and zugzwang. Throughout the game, players must remain adaptable, anticipating their opponent's moves while executing their own plans effectively.",
    },
    {
      question: "Q3. Is it a team game?",
      answer:
        "Chess is primarily an individual game, played between two players who compete against each other. However, there are team formats, such as team tournaments, where groups of players represent their clubs or countries. In these formats, each player competes in their own game, but the overall score contributes to the team's success. So while the standard game is one-on-one, chess can be played in a team context as well.",
    },
    {
      question: "Q4. Rules of the game.",
      answer:
        "The rules of chess provide a structured framework for the game, played on an 8x8 board with 64 squares. Each player starts with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns, arranged on the two closest rows. Each piece moves differently; for instance, the king moves one square in any direction, the queen moves any number of squares in all directions, and the knight moves in an L-shape. Special moves include castling, which helps to protect the king and reposition a rook, and en passant, allowing a pawn to capture an adjacent opposing pawn that has just moved two squares forward. The main objective is to checkmate the opponent's king, putting it in a position where it cannot escape capture. A player may also win if their opponent resigns. If a king is under threat, it is in check and the player must resolve the threat; if there are no legal moves left but the king is not in check, it results in stalemate, which is a draw. Other draw conditions include insufficient material to checkmate, threefold repetition of a position, and the fifty-move rule, where no pawns have moved and no captures have occurred in the last fifty moves. These rules create a rich environment for strategy and tactics in chess.",
    },
    {
      question: "Q5. What are some important facts about the game?",
      answer:
        "Chess has a rich history and is played worldwide, with origins tracing back over a thousand years to 6th century India, where it was known as Chaturanga. The game has gained immense popularity, featuring millions of players and prestigious tournaments like the World Chess Championship. Each piece in chess has a relative value that influences strategy; for example, the queen is worth 9 points, while a pawn is valued at 1. Opening theory plays a crucial role, with established strategies such as the Sicilian Defense and Ruy López guiding players in the early game. Mastering endgame techniques is equally important for converting advantages into wins or defending against losses. Chess notation, particularly algebraic notation, allows players to record and analyze games effectively. The game has also become a benchmark for artificial intelligence, famously exemplified by IBM’s Deep Blue defeating world champion Garry Kasparov in 1997. Playing chess can enhance cognitive skills such as problem-solving and memory, making it a valuable educational tool. Additionally, the participation of women in chess has increased, with the Women’s World Chess Championship being held since 1927. There are also numerous chess variants, such as Chess960 (Fischer Random Chess), which introduce different rules and promote creativity. Overall, chess embodies a blend of strategy, history, and cultural significance that continues to captivate players around the globe.",
    },
  ];

  return (
    <section className="about-section" id="chess">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
            <h2 className="common-heading fw-bolder mb-4">Chess</h2>
            <p className="about-title">
            Chess is a two-player strategy board game that involves moving pieces on an 8x8 grid, called a chessboard. Each player starts with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. The objective of the game is to checkmate your opponent's king, meaning the king is in a position to be captured and cannot escape.The game combines elements of strategy, tactics, and foresight, with each piece having its own unique movement rules. Chess has a rich history and is played competitively worldwide, with established rules and formal tournaments. It’s also popular for recreational play and has inspired a vast array of literature, studies, and even art.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <img src={chess} alt="chess" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header" onClick={() => toggleAccordion(index)}>
                {item.question} <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>▼</span>
              </h2>
              <div 
                className={`accordion-content ${activeIndex === index ? "open" : ""}`}
                style={{ maxHeight: activeIndex === index ? '500px' : '0px', transition: 'max-height 0.7s ease-out, padding 0.3s ease-out' }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chess;
