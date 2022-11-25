import style from "./Thumb.module.scss";
type Props = {
  title: string;
  cover: string;
};

function Tag({ title, cover } : Props) {
  return (
    <div className={style.Thumb}>
      <img src={cover} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Tag;