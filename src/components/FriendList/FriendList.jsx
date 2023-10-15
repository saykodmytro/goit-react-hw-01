import css from './FriendList.module.css';

export const FriendList = ({ frendList }) => {
  return (
    <ul className={css.list}>
      {frendList.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={css.item}>
          <span
            className={`${css.span} ${isOnline ? css.online : css.offline}`}
          ></span>
          <img className={css.imgAvat} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
