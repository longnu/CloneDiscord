import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { SkeletonUtils } from "three-stdlib";

export const Item = ( props ) => {
  const { name, gridPosition, size, rotation } = props.item;
  
  const { scene } = useGLTF(`/${name}.glb`);
  // Skinned meshes cannot be re-used in threejs without cloning them
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const width = rotation === 1 || rotation === 3 ? size[1] : size[0];
  const height = rotation === 1 || rotation === 3 ? size[0] : size[1];
  return (
    <primitive
      object={clone}
      position={[
        width / props.map.gridDivision / 2 + gridPosition[0] / props.map.gridDivision -5,
        0,
        height / props.map.gridDivision / 2 + gridPosition[1] / props.map.gridDivision -5,
      ]}
      rotation-y={((rotation || 0) * Math.PI) / 2}
    />
  );
};
