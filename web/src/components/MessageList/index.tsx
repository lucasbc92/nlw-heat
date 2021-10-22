import styles from "./styles.module.scss";

import logoImg from "../../assets/logo.svg";

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          Não vejo a hora de começar esse evento, com certeza vai ser o melhor
          de todos os tempos, vamooo pra cima! 🔥🔥
        </li>
      </ul>
    </div>
  );
}
