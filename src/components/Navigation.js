import "./Navigation.css";
import { Header } from "@primer/components";

export default function Navigation() {
  return (
    <Header>
      <Header.Item>
        <Header.Link href="#">About</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#">Releases</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#">Team</Header.Link>
      </Header.Item>
    </Header>
  );
}
