import styles from "@/app/page.module.css";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      (BeforeLogin의 Layout.tsx 입니다.)
      {children}
      {modal}
    </div>
  );
}
