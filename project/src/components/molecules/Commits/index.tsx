import { SpanText } from "../../atoms";
import style from "./style.module.scss";

interface iCommitsProps {
  commits: string;
}

export function Commits(props: iCommitsProps) {
  const { commits } = props;

  return (
    <div className={style.commits}>
      <SpanText>
        {commits}
      </SpanText>
    </div>
  );
}
