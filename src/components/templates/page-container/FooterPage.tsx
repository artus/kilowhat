import { FooterMenu } from "../../molecules/menu/FooterMenu"
import { Footer } from "../../organisms/footer/Footer"

export const FooterPage: React.FC = ({ children }) => {
  return <>
    {children}
    <Footer />
    <FooterMenu />
  </>
}