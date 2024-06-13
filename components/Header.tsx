import { ModeToggle } from "./ModeToogle";
import { NavLinks } from "./NavLinks";
import { UserNav } from "./UserNav";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <div className="mx-10 md:mx-20 sticky top-5 rounded-3xl z-50 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center w-full gap-5 py-4 md:px-20 px-10 rounded-3xl border-2 mt-5">
        <Logo />
        <div className=" flex-row justify-between items-center gap-2 hidden md:flex">
          <NavLinks />
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
