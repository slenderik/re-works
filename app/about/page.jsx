import MainTemplate from "@/ui/templates/main-template";
import WrapperTemplate from "@/ui/templates/wrapper-template";

export const metadata  = {
	title: "О ReWorks",
};

export default function EmployersPage () {
	return (
    <WrapperTemplate>
      <MainTemplate>
        <h1>Сайт ReWork принадледжил БПОУ «КИТЭК»</h1>

				<h2>Реквизиты для связи</h2>
				<address>
					<p>Адрес: ул. 27-я Северная, 69</p>
					<p>Эл. Почта: <a href="mailto:tradeconomy@mail.ru">tradeconomy@mail.ru</a></p>
					<p>Телефон: <a href="tel:68-07-73"> 68-07-73</a></p>
				</address>

        <p>Бюджетное профессиональное образовательное учреждение Омской области «Колледж инновационных технологий, экономики и коммерции».</p>

      </MainTemplate>
    </WrapperTemplate>
	);
}