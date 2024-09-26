import MainTemplate from "@/ui/templates/main-template";
import WrapperTemplate from "@/ui/templates/wrapper-template";

export const metadata  = {
	title: "Работодателям",
};

export default function EmployersPage () {
	return (
		<WrapperTemplate>
      <MainTemplate>
        <h1>Работодателям</h1>
        <p>У нас 536 активных вакансий на портале и каждый год пополняем перспективными студентами</p>
      </MainTemplate>
    </WrapperTemplate>
	);
}