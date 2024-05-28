import { useDispatch } from "react-redux"
import { addPlatform } from "../../reducers/platforms";

const AddPlatformsToRedux = (Elements) => {
  const dispatch = useDispatch();
  Elements.forEach(el => {
    dispatch(addPlatform({src: `${el}.png`, name: el}))
  })
}

export { AddPlatformsToRedux };