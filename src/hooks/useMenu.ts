// "use client"

// import { data } from "@/data"
// import { ErrorMenu } from "@/errors"
// import { MenuItem } from "@/interfaces"
// import { getDataMenu } from "@/services"
// import { useEffect, useState } from "react"

// export function useMenu() {
//   const [menuItems, setMenuItems] = useState<MenuItem[]>([])

//   useEffect(() => {
//     const getMenuItems = async () => {
//       const { error, success } = await getDataMenu({ name: "principal" })

//       if (error) throw new ErrorMenu(error)

//       if (success?.data[0]?.attributes?.menuItems) {
//         setMenuItems(success.data[0].attributes.menuItems)
//       }
//     }
//     getMenuItems()
//   }, [])

//   return { menuItems }
// }
