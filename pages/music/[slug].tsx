import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllMusicWithSlug, getObjectWithSlug } from 'lib/api'
import CardContainer from 'components/CardContainer'
import Hero from 'components/Hero'
import { MusicType } from 'types/allTypes'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'

import Container from 'components/Container'
import { useRef, useState } from 'react'

const MusicPage: React.FC<MusicType> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  if (router.isFallback) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    )
  }

  const password = props?.metadata?.password
  const fileUrl = props?.metadata?.file?.url || '/'
  const title = props?.title

  return (
    <>
      <Hero title="Music" background="contact-background" />
      <CardContainer offset>
        <div className="mb-10 text-center">
          {isAuthenticated ? (
            <>
              <strong className="block mb-4 text-xl">{title}</strong>
              <ReactPlayer
                className="m-auto"
                url={fileUrl}
                controls
                height={60}
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nodownload',
                    },
                  },
                }}
              />
            </>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                if (inputRef.current) {
                  if (inputRef.current.value === password) {
                    setIsAuthenticated(true)
                  } else {
                    setIsAuthenticated(false)
                  }
                }
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-96">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-bold text-2xl"
                  >
                    Password
                  </label>
                  <input
                    ref={inputRef}
                    type="text"
                    id="first_name"
                    className={`${
                      isAuthenticated === false
                        ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
                        : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    }`}
                    placeholder="Type password to access file"
                  />
                  {isAuthenticated === false && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">Incorrect password</span>
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </CardContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const data = await getObjectWithSlug(params.slug, preview)

  return {
    props: {
      ...data.object,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const music = (await getAllMusicWithSlug()) || []

  return {
    paths: music.map((music) => `/music/${music.slug}`),
    fallback: true,
  }
}

export default MusicPage
