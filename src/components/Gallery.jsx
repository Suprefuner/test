import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
]

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }
  },
}

export default function Gallery() {
  const [[page, direction], setPage] = useState([0, 0])
  const array = [0, 1, 2]

  const colors = ["bg-blue-200", "bg-red-200", "bg-orange-200"]

  const paginate = (newDirection) => {
    let newPage = page + newDirection
    if (page + newDirection > array.length - 1 || page + newDirection < 0) {
      newPage = newDirection > 0 ? 0 : array.length - 1
    }
    setPage([newPage, newDirection])
  }

  return (
    <section className="grid h-screen bg-green-200 place-content-center">
      <div>{page}</div>
      <div className="relative w-full h-full ">
        <div className="w-[500px] h-[300px] border-2 border-black relative ">
          <AnimatePresence initial={false} custom={direction}>
            {/* <motion.div
              layout
              key={page}
              src={array[page]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween" },
                opacity: { duration: 0.2 },
              }}
              className={`w-full h-full ${colors[page]}`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, ipsam placeat, itaque totam quas laboriosam quo
              similique incidunt molestias cupiditate perspiciatis eum
              distinctio expedita nesciunt dolore in quia tempore soluta autem
              aliquid molestiae aliquam esse tenetur. Odio, exercitationem!
              Consequatur nobis a in quisquam voluptatem illo nihil iste
              aliquam? Iure, accusantium.
            </motion.div> */}
            <motion.img
              layout
              key={page}
              src={images[page]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 3, delay: 1 },
                opacity: { duration: 0.2 },
              }}
              className={`absolute inset-0 w-full h-full object-cover`}
            />
          </AnimatePresence>
        </div>
        <div className="absolute z-10 flex justify-between w-full -translate-y-1/2 top-1/2">
          <div
            className="p-1 text-5xl bg-white rounded-full prev"
            onClick={() => paginate(-1)}
          >
            -
          </div>
          <div
            className="p-1 text-5xl bg-white rounded-full next"
            onClick={() => paginate(1)}
          >
            +
          </div>
        </div>
      </div>
    </section>
  )
}
