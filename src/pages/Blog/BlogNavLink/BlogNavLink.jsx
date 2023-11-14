import style from "./BlogNavLink.module.css";

export default function BlogNavLink() {
  return (
    <div className={style.navContainer}>
      <button>All articles</button>
      <button>Food & Drink</button>
      <button>Inspiration</button>
      <button>Local Guides</button>
      <button>See & Do</button>
      <button>Travel Tips</button>
      <button>Where to stay</button>
    </div>
  );
}
