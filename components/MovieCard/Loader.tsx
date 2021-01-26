import dynamic from 'next/dynamic'
const ContentLoader = dynamic(() => import('react-content-loader'), { ssr: false })

const MyLoader: React.FC = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={220}
      height={400}
      viewBox="0 0 220 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="1" rx="12" ry="12" width="200" height="300" />
      <rect x="0" y="315" rx="14" ry="14" width="200" height="22" />
      <rect x="0" y="347" rx="10" ry="10" width="70" height="16" />
      <rect x="80" y="347" rx="10" ry="10" width="85" height="16" />
      <rect x="0" y="373" rx="10" ry="10" width="114" height="16" />
    </ContentLoader>
  )
}

export default MyLoader
