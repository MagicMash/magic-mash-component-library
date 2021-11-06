import useModal from "../../../hooks/useModal";
import useAlert from "../../../hooks/useAlert";
import Alert from "../../alert/alert";
import Navbar from "../../navbar/navbar";
import { alertData, linkData } from "../../../ts/componentsProps";

const initialAlerts: alertData[] = [
  {
    text: "alert text must be provided, extra info, as dropdowns or modals handler can be passed by the children and handler props to by the linkData type object",
    title: "Warning Example",
    content: "alert content",
  },
];

const notificationClasses = ''

const NavbarWithNotifications = () => {
  const [isAlertsModalOpen, toggleAlerstModal, modal] = useModal();
  const [alerts, addAlert, removeAlert] = useAlert(initialAlerts);

  const bell = (
    <>
    {alerts.length === 0 ? null : <div className='h-1 w-1 bg-pink-600 rounded-full m-0 p-0 absolute ml-4 animate-ping ' />}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 hover:transform hover:transition hover:scale-105 cursor-pointer"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
    </svg>
    </>
  );

  const testLinks: linkData[] = [
    { url: "/", text: "Home" },
    { url: "/testPage", text: "TestPage" },
    { withIcon: true, icon: bell, handler: toggleAlerstModal, linkClass: notificationClasses },
  ];

  const alertComponents = alerts.map((alert, index) => {
    return (
      <Alert
        key={index}
        classes=" bg-lightYellow "
        closeAlertHandler={() => removeAlert(alert.title)}
        alert={alert}
      />
    );
  });

  const alertsModal = modal(alertComponents, " w-11/12 ");

  return (
    <>
      <Navbar
        classes="absolute fixed top-0"
        withLogo
        logo="/matthew-henry-U5rMrSI7Pn4-unsplash.jpg"
        withLinks
        linkContainerClasses=' flex flex-row justify-end '
        links={testLinks}
      />
      {alertsModal}
    </>
  );
};

export default NavbarWithNotifications;
