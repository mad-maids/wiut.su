import Head from './Head'
import styles from './page.module.css'

const Page = ({
  header = true,
  footer = true,
  title,
  description,
  image,
  children
}) => {
  return (
    <div className="min-w-xs">
      <Head
        title={`${title ? `${title} - ` : ''}UwUssimo Robinson`}
        description={description}
        image={image}
      />

      <main>{children}</main>
    </div>
  )
}

export default Page
