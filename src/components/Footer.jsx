import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-3">
        <div className="grid grid-cols-4 gap-6 py-14">
          <div>
            <h1 className="font-bold">AutoNex</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis ad iusto esse deleniti, molestiae consequuntur
              aliquam
            </p>
          </div>
          <div>
            <div>
              <h1>NEED HELP?</h1>
              <div className="space-y-3 mt-4">
                <p>(+800) 1234 5678 90</p>
                <p>Monday – Friday: 9:00-20:00</p>
                <p>Saturady: 11:00 – 15:00</p>
                <p>autonex@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1>GET TO KNOW US</h1>
              <div className="space-y-3 mt-4">
                <p>About Tunepain</p>
                <p>Investors</p>
                <p>Contact Us</p>
                <p>Parnership</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1>SIGN UP FOR NEWSLETTERS</h1>
              <div className="mt-4">
                <p>
                  Subscribe To Our Newsletter And Get Bonuses For The Next
                  Purchase
                </p>
                <div className="flex mt-4 items-center space-x-2">
                  <Input type="email" placeholder="Email" />
                  <Button type="submit">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b"></div>
        <div className="flex py-14 justify-between items-center">
          <p>© 2024 – AUTONEX All Rights Reserved.</p>
          <div>social icon</div>
        </div>
      </div>
    </footer>
  );
}
