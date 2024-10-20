import MainTemplate from "@/ui/templates/main-template";
import WrapperTemplate from "@/ui/templates/wrapper-template";

export const metadata  = {
	title: "О ReWorks",
};

export default function EmployersPage () {
	return (
    <WrapperTemplate>
      <MainTemplate>
	<h1>Связаться с нами</h1>
	<address>
		<a href="mailto:tradeconomy@mail.ru">tradeconomy@mail.ru</a>
		<p>БПОУ «КИТЭК» (644116, г. Омск, ул. 27 Северная, дом 69)</p>
		<p>Адрес: ул. 27-я Северная, 69</p>
		<p>Телефон: <a href="tel:68-07-73"> 68-07-73</a></p>
	</address>
      </MainTemplate>
    </WrapperTemplate>
	);
}
