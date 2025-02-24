import AllWishes from "../templates/profilePage/AllWishes";
import BirthdayWish from "../templates/profilePage/BirthdayWish";
import Invoices from "../templates/profilePage/Invoices";
import Varified from "../templates/profilePage/Varified";
import NewWish from "../templates/profilePage/NewWish";
import Support from "../templates/profilePage/Support";
import UpdateWish from "../templates/profilePage/UpdateWish";
import Wish from "../templates/profilePage/Wish";
import NotVarified from "../templates/profilePage/NotVarified";
import ProfileLayout from "./ProfileLayout";

const Profile = () => {
  return (
    <ProfileLayout>
      <Varified />
      <NotVarified />
      <AllWishes />
      <BirthdayWish />
      <NewWish />
      <Wish />
      <UpdateWish />
      <Invoices />
      <Support />
    </ProfileLayout>
  );
};

export default Profile;
