import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const [_t] = useTranslation()

  return (
    <h1 className="text-red-500">{ _t('hi') }</h1>
  )
}

export default Home
