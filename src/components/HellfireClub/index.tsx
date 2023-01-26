import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTFResult } from './types';

const url = "/static/hellfire-clubroom.glb"

export default () => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group scale={0.1} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[4.36049414, 0.64554214, -276.47399902]}
            scale={[11.641572, 0.77763826, 7.71474314]}
          >
            <mesh
              geometry={nodes.Plane_wall_0.geometry}
              material={materials.wall}
            />
            <mesh
              geometry={nodes.Plane_Brick_0.geometry}
              material={materials.Brick}
            />
          </group>
          <group
            position={[4.69975471, -10.32173634, -268.42752075]}
            rotation={[-0.03704922, -0.00281218, -0.00238316]}
            scale={[9.30657959, 0.6216644, 6.16736746]}
          >
            <mesh
              geometry={nodes.Plane001_Black_0.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Plane001_dask_0.geometry}
              material={materials.dask}
            />
          </group>
          <group
            position={[4.36049414, 0.64554214, -276.47399902]}
            scale={[11.641572, 0.77763826, 7.71474314]}
          >
            <mesh
              geometry={nodes.Plane010_wall_0.geometry}
              material={materials.wall}
            />
          </group>
          <group
            position={[4.36049414, 0.64554214, -276.47399902]}
            scale={[11.641572, 0.77763826, 7.71474314]}
          >
            <mesh
              geometry={nodes.Plane012_Floor_0.geometry}
              material={materials.Floor}
            />
          </group>
          <group
            position={[4.36049414, 0.64554214, -276.47399902]}
            scale={[11.641572, 0.77763826, 7.71474314]}
          >
            <mesh
              geometry={nodes.Plane015_wall_0.geometry}
              material={materials.wall}
            />
            <mesh
              geometry={nodes.Plane015_Brick_0.geometry}
              material={materials.Brick}
            />
          </group>
          <group
            position={[-48.646698, 530.41107178, -979.40771484]}
            scale={[11.641572, 0.77763826, 7.71474314]}
          >
            <mesh
              geometry={nodes.Plane016_Brick_0.geometry}
              material={materials.Brick}
            />
          </group>
          <group
            position={[4.36049414, 0.64554214, -276.47399902]}
            scale={[11.641572, 0.77763826, 7.71474314]}
          >
            <mesh
              geometry={nodes.Plane018_Brick_0.geometry}
              material={materials.Brick}
            />
          </group>
          <group
            position={[-509.90005493, 913.59692383, -649.24084473]}
            scale={[11.641572, 0.77763826, 7.71474314]}
          >
            <mesh
              geometry={nodes.Plane019_wall_0.geometry}
              material={materials.wall}
            />
          </group>
          <group
            position={[4.69975471, -10.32173634, -268.42752075]}
            rotation={[-0.03704922, -0.00281218, -0.00238316]}
            scale={[9.30657959, 0.6216644, 6.16736746]}
          >
            <mesh
              geometry={nodes.Plane039_white_0.geometry}
              material={materials.white}
            />
          </group>
          <group
            position={[-509.90005493, 913.59692383, -649.24084473]}
            scale={[11.641572, 0.77763826, 7.71474314]}
          >
            <mesh
              geometry={nodes.Plane048_wall_0.geometry}
              material={materials.wall}
            />
          </group>
          <group
            position={[281.29602051, 245.07220459, -329.45489502]}
            scale={[0.90568233, 0.9582786, 2.14086294]}
          >
            <mesh
              geometry={nodes.Plane002_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane002_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-643.4654541, 104.94889069, 1006.62402344]}
            rotation={[-0.00080976, -0.80941316, -1.57396754]}
            scale={[0.90568233, 0.90568227, 1.95423043]}
          >
            <mesh
              geometry={nodes.Plane043_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane043_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-477.8508606, 122.20121765, -875.36108398]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.0101887, 0.95650691, 2.34239721]}
          >
            <mesh
              geometry={nodes.Plane044_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane044_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-513.14526367, 370.8553772, -875.36108398]}
            rotation={[-Math.PI, -1.38127923, 0.00000575]}
            scale={[1.0101887, 0.95650691, 2.34239697]}
          >
            <mesh
              geometry={nodes.Plane028_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane028_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-176.55618286, 129.88224792, 1070.04980469]}
            rotation={[-Math.PI, -1.20359901, -Math.PI]}
            scale={[0.90568227, 0.90568233, 1.95423043]}
          >
            <mesh
              geometry={nodes.Plane046_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane046_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-175.29928589, 143.80400085, 904.51898193]}
            rotation={[0, -1.18845034, 0]}
            scale={[0.58610708, 0.91849864, 0.59725165]}
          >
            <mesh
              geometry={nodes.Plane004_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane004_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[-176.73587036, 391.18966675, 1066.19897461]}
            rotation={[0, 0.35422641, 0]}
            scale={[0.58610713, 0.91849864, 0.59725165]}
          >
            <mesh
              geometry={nodes.Plane003_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane003_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[442.60998535, 129.75982666, -853.39257813]}
            rotation={[-Math.PI, -1.52450684, -Math.PI]}
            scale={[0.52873904, 0.828596, 0.53879285]}
          >
            <mesh
              geometry={nodes.Plane005_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane005_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[581.19732666, 129.75982666, -853.39257813]}
            rotation={[-Math.PI, -1.45221797, -Math.PI]}
            scale={[0.52873898, 0.828596, 0.53879279]}
          >
            <mesh
              geometry={nodes.Plane006_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane006_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[720.62005615, 129.75982666, -853.39257813]}
            rotation={[0, -1.5169642, 0]}
            scale={[0.52873904, 0.828596, 0.53879279]}
          >
            <mesh
              geometry={nodes.Plane007_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane007_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[442.60998535, 259.57217407, -836.41345215]}
            rotation={[2.91545218, -1.4457513, 2.96513852]}
            scale={[0.52873904, 0.828596, 0.53879279]}
          >
            <mesh
              geometry={nodes.Plane008_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane008_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[580.43902588, 259.57217407, -836.41345215]}
            rotation={[0, -1.49727058, 0]}
            scale={[0.52873904, 0.828596, 0.53879285]}
          >
            <mesh
              geometry={nodes.Plane041_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane041_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[717.43273926, 259.57217407, -836.41345215]}
            rotation={[-Math.PI, -1.33253959, -Math.PI]}
            scale={[0.52873904, 0.828596, 0.53879279]}
          >
            <mesh
              geometry={nodes.Plane042_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane042_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[189.14117432, 272.23529053, -204.93867493]}
            rotation={[1.5324645, -0.00628228, 0.0055276]}
            scale={[0.58610713, 0.91849852, 0.59725165]}
          >
            <mesh
              geometry={nodes.Plane029_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane029_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[-874.9420166, 143.99508667, -898.97729492]}
            rotation={[0, -0.91839868, 0]}
            scale={[0.58610713, 0.91849864, 0.59725165]}
          >
            <mesh
              geometry={nodes.Plane045_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane045_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[217.58763123, 143.99508667, -338.65356445]}
            scale={[0.58610713, 0.91849864, 0.59725165]}
          >
            <mesh
              geometry={nodes.Plane047_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane047_woosstul_0.geometry}
              material={materials["woos.stul"]}
            />
          </group>
          <group
            position={[1158.49243164, 824.8145752, 50.56352615]}
            rotation={[0, -0.08972943, 0]}
            scale={[0.79942632, 0.79942626, 0.79942632]}
          >
            <mesh
              geometry={nodes.Circle_clock_0.geometry}
              material={materials.clock}
            />
          </group>
          <group
            position={[1153.12084961, 831.6541748, 38.34133148]}
            rotation={[0, -0.08972943, 0]}
            scale={[0.79942632, 0.79942626, 0.79942632]}
          >
            <mesh
              geometry={nodes.Circle001_Glossclock_0.geometry}
              material={materials["Gloss.clock"]}
            />
          </group>
          <group
            position={[1165.05187988, 833.65423584, 64.01681519]}
            rotation={[0, -0.08972942, -Math.PI / 2]}
            scale={[0.1694939, 0.16949391, 0.02633297]}
          >
            <mesh
              geometry={nodes.Plane009_Strel_0.geometry}
              material={materials.Strel}
            />
          </group>
          <group
            position={[1073.46960449, 617.48596191, -753.1963501]}
            scale={0.79942626}
          >
            <mesh
              geometry={nodes.Cube002_wood2_0.geometry}
              material={materials.wood2}
            />
          </group>
          <group
            position={[1073.46960449, 618.38873291, -753.1963501]}
            scale={0.79942626}
          >
            <mesh
              geometry={nodes.Cube003_wood1_0.geometry}
              material={materials.wood1}
            />
          </group>
          <group
            position={[1073.46960449, 617.48596191, -753.1963501]}
            scale={0.79942626}
          >
            <mesh
              geometry={nodes.Cube006_wood1_0.geometry}
              material={materials.wood1}
            />
          </group>
          <group
            position={[1073.46960449, 617.48596191, -753.1963501]}
            scale={0.79942626}
          >
            <mesh
              geometry={nodes.Cube007_wood_0.geometry}
              material={materials.wood}
            />
          </group>
          <group
            position={[574.62072754, 96.33441925, 664.43029785]}
            rotation={[0, -0.19780272, 0]}
            scale={[0.56766325, 1, 0.99999994]}
          >
            <mesh
              geometry={nodes.Cube010_table2_0.geometry}
              material={materials["table.2"]}
            />
          </group>
          <group position={[990.86181641, 10.63469982, 905.81634521]}>
            <mesh
              geometry={nodes.Plane013_bleu_0.geometry}
              material={materials.bleu}
            />
            <mesh
              geometry={nodes.Plane013_yellowdark_0.geometry}
              material={materials["yellow.dark"]}
            />
          </group>
          <group position={[990.86181641, 10.63469982, 905.81634521]}>
            <mesh
              geometry={nodes.Plane014_yellow_0.geometry}
              material={materials.yellow}
            />
            <mesh
              geometry={nodes.Plane014_bleu_0.geometry}
              material={materials.bleu}
            />
          </group>
          <group position={[-598.5723877, 592.83355713, -1067.28662109]}>
            <mesh
              geometry={nodes.Cube_rama_0.geometry}
              material={materials.rama}
            />
          </group>
          <group
            position={[607.99468994, 592.83355713, -1067.28662109]}
            scale={[1, 0.96727079, 1]}
          >
            <mesh
              geometry={nodes.Cube001_rama_0.geometry}
              material={materials.rama}
            />
          </group>
          <group position={[1121.00109863, 369.24966431, -645.45068359]}>
            <mesh
              geometry={nodes.Sphere_Black_0.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Sphere_Blueglobus_0.geometry}
              material={materials["Blue.globus"]}
            />
          </group>
          <group
            position={[766.82653809, 2.28276253, 108.32263184]}
            rotation={[3.3e-7, -3.9e-7, Math.PI]}
            scale={[2.12978029, 1, 1.25510108]}
          >
            <mesh
              geometry={nodes.Plane040_wood_0.geometry}
              material={materials.wood}
            />
            <mesh
              geometry={nodes.Plane040_map_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[287.37698364, 245.91650391, -178.77276611]}
            scale={[0.51927495, 0.51927495, 0.41699851]}
          >
            <mesh
              geometry={nodes.Plane050_global_0.geometry}
              material={materials.global}
            />
          </group>
          <group
            position={[243.36039734, 246.65765381, -154.85289001]}
            rotation={[0, 1.22520947, 0]}
            scale={[0.99999994, 1, 0.99999994]}
          >
            <mesh
              geometry={nodes.Plane051_virus_0.geometry}
              material={materials.virus}
            />
          </group>
          <group
            position={[237.63725281, 247.34489441, -167.01812744]}
            rotation={[0, -1.44971645, 0]}
            scale={[0.99999994, 1, 0.99999994]}
          >
            <mesh
              geometry={nodes.Plane052_virus_0.geometry}
              material={materials.virus}
            />
          </group>
          <group
            position={[793.21459961, 5.97277069, 77.42604065]}
            scale={0.5882504}
          >
            <mesh
              geometry={nodes.Cube008_bluemagnit_0.geometry}
              material={materials["blue.magnit"]}
            />
          </group>
          <group
            position={[1163.38134766, 444.94104004, 281.63882446]}
            rotation={[-0.03704924, -0.0028121, -1.57317953]}
            scale={[1.40522468, 1.4052248, 1.4052248]}
          >
            <mesh
              geometry={nodes.Cube009_bluemagnit_0.geometry}
              material={materials["blue.magnit"]}
            />
          </group>
          <group
            position={[1163.13366699, 474.50653076, 390.31066895]}
            rotation={[-0.03704924, -0.0028121, -1.57317953]}
            scale={[1.40522468, 1.4052248, 1.4052248]}
          >
            <mesh
              geometry={nodes.Cube011_bluemagnit_0.geometry}
              material={materials["blue.magnit"]}
            />
          </group>
          <group
            position={[1163.33813477, 523.21826172, 358.06488037]}
            rotation={[-0.03704924, -0.0028121, -1.57317953]}
            scale={[1.40522468, 1.4052248, 1.4052248]}
          >
            <mesh
              geometry={nodes.Cube012_bluemagnit_0.geometry}
              material={materials["blue.magnit"]}
            />
          </group>
          <group
            position={[1031.10888672, 14.33088779, 392.34158325]}
            rotation={[0, 0.49747047, 0]}
            scale={[0.41347861, 0.41347858, 0.30365893]}
          >
            <mesh
              geometry={nodes.Plane054_paper_0.geometry}
              material={materials.paper}
            />
            <mesh
              geometry={nodes.Plane054_book2_0.geometry}
              material={materials.book2}
            />
            <mesh
              geometry={nodes.Plane054_book_0.geometry}
              material={materials.book}
            />
          </group>
          <group
            position={[1059.03820801, 17.76573563, -875.55578613]}
            rotation={[0, 0.67875028, 0]}
            scale={[0.35762343, 0.35762346, 0.35762343]}
          >
            <mesh
              geometry={nodes.Sphere002_Black_0.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Sphere002_Blueglobus_0.geometry}
              material={materials["Blue.globus"]}
            />
          </group>
          <group
            position={[1062.45507813, 9.82653618, -765.03894043]}
            rotation={[0, 0.67875022, 0]}
            scale={[0.39924413, 0.3992441, 0.39924413]}
          >
            <mesh
              geometry={nodes.Sphere001_Black_0.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Sphere001_Blueglobus_0.geometry}
              material={materials["Blue.globus"]}
            />
          </group>
          <group
            position={[-442.79650879, 304.43206787, -835.33227539]}
            rotation={[0.18333687, 0.79934038, -1.8129746]}
            scale={[0.21012168, 0.21012169, 0.21012168]}
          >
            <mesh
              geometry={nodes.Plane053_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane053_red_0.geometry}
              material={materials.material_28}
            />
            <mesh
              geometry={nodes.Plane053_wood1_0.geometry}
              material={materials.wood1}
            />
          </group>
          <group
            position={[251.68719482, 248.10128784, -183.81474304]}
            scale={0.05098037}
          >
            <mesh
              geometry={nodes.Cylinder_Pensil1_0.geometry}
              material={materials.Pensil1}
            />
            <mesh
              geometry={nodes.Cylinder_paper_0.geometry}
              material={materials.paper}
            />
            <mesh
              geometry={nodes.Cylinder_Pensil2_0.geometry}
              material={materials["Pensil.2"]}
            />
            <mesh
              geometry={nodes.Cylinder_metalic_0.geometry}
              material={materials.metalic}
            />
          </group>
          <group
            position={[299.82653809, 255.2875824, -500.72012329]}
            rotation={[-0.03170281, -0.78788066, 0.0469966]}
            scale={[0.03368047, 0.05098037, 0.05098037]}
          >
            <mesh
              geometry={nodes.Cylinder001_Pensil1_0.geometry}
              material={materials.Pensil1}
            />
            <mesh
              geometry={nodes.Cylinder001_paper_0.geometry}
              material={materials.paper}
            />
            <mesh
              geometry={nodes.Cylinder001_Pensil2_0.geometry}
              material={materials["Pensil.2"]}
            />
            <mesh
              geometry={nodes.Cylinder001_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Cylinder001_book3_0.geometry}
              material={materials.book3}
            />
            <mesh
              geometry={nodes.Cylinder001_badb_0.geometry}
              material={materials.badb}
            />
            <mesh
              geometry={nodes.Cylinder001_kros_0.geometry}
              material={materials.kros}
            />
          </group>
          <group
            position={[251.68719482, 249.32124329, -177.15577698]}
            rotation={[-3.06861548, 1.25913627, -Math.PI]}
            scale={[0.03368047, 0.05098037, 0.05098037]}
          >
            <mesh
              geometry={nodes.Cylinder002_Pensil1_0.geometry}
              material={materials.Pensil1}
            />
            <mesh
              geometry={nodes.Cylinder002_paper_0.geometry}
              material={materials.paper}
            />
            <mesh
              geometry={nodes.Cylinder002_Pensil2_0.geometry}
              material={materials["Pensil.2"]}
            />
            <mesh
              geometry={nodes.Cylinder002_metalic_0.geometry}
              material={materials.metalic}
            />
          </group>
          <group
            position={[-538.68225098, 627.22991943, 1273.6875]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.83804965}
          >
            <mesh
              geometry={nodes.Plane063_poster_0.geometry}
              material={materials.poster}
            />
          </group>
          <group
            position={[-1837.88317871, 991.04821777, 650.3527832]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.83804965}
          >
            <mesh
              geometry={nodes.Plane064_poster2_0.geometry}
              material={materials.poster2}
            />
          </group>
          <group position={[1115.73425293, 188.2041626, -745.10253906]}>
            <mesh
              geometry={nodes.Cube004_book1_0.geometry}
              material={materials.book1}
            />
            <mesh
              geometry={nodes.Cube004_paper_0.geometry}
              material={materials.paper}
            />
            <mesh
              geometry={nodes.Cube004_book2_0.geometry}
              material={materials.book2}
            />
            <mesh
              geometry={nodes.Cube004_book3_0.geometry}
              material={materials.book3}
            />
          </group>
          <group
            position={[-934.77685547, 570.83227539, -1047.94506836]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.Plane022_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[-934.77685547, 570.83227539, -1047.94506836]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.Plane023_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[-934.77685547, 570.83227539, -1047.94506836]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.Plane021_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[277.3840332, 570.83227539, -1047.94506836]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.Plane024_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[277.3840332, 570.83227539, -1047.94506836]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.Plane025_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[596.46966553, 570.83227539, -1047.94506836]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.Plane026_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[596.46966553, 570.83227539, -1047.94506836]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.Plane027_glass_0.geometry}
              material={materials.glass}
            />
          </group>
          <group
            position={[-599.17712402, 563.59521484, -1030.12902832]}
            scale={[1.13708425, 1, 0.2147221]}
          >
            <mesh
              geometry={nodes.Plane030_wood1_0.geometry}
              material={materials.wood1}
            />
          </group>
          <group
            position={[632.42242432, 563.59521484, -1020.83709717]}
            scale={[1, 1, 0.2147221]}
          >
            <mesh
              geometry={nodes.Plane032_wood1_0.geometry}
              material={materials.wood1}
            />
          </group>
          <group
            position={[632.42242432, 563.59521484, -1020.83709717]}
            scale={[1, 1, 0.2147221]}
          >
            <mesh
              geometry={nodes.Plane033_wood2_0.geometry}
              material={materials.wood2}
            />
          </group>
          <group
            position={[632.42242432, 563.59521484, -1020.83709717]}
            scale={[1, 1, 0.2147221]}
          >
            <mesh
              geometry={nodes.Plane034_wood1_0.geometry}
              material={materials.wood1}
            />
          </group>
          <group
            position={[632.42242432, 563.59521484, -1020.83709717]}
            scale={[1, 1, 0.2147221]}
          >
            <mesh
              geometry={nodes.Plane035_wood1_0.geometry}
              material={materials.wood1}
            />
          </group>
          <group
            position={[632.42242432, 563.59521484, -1020.83709717]}
            scale={[1, 1, 0.2147221]}
          >
            <mesh
              geometry={nodes.Plane036_wood2_0.geometry}
              material={materials.wood2}
            />
          </group>
          <group
            position={[-599.17712402, 563.59521484, -1030.12902832]}
            scale={[1.13708425, 1, 0.2147221]}
          >
            <mesh
              geometry={nodes.Plane037_wood2_0.geometry}
              material={materials.wood2}
            />
          </group>
          <group
            position={[258.43377686, 245.82176208, -386.99798584]}
            rotation={[0, -1.29825437, -1.7e-7]}
            scale={[0.38989586, 0.50040066, 0.39702913]}
          >
            <mesh
              geometry={nodes.Circle002_Black_0.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Circle002_bluemagnit_0.geometry}
              material={materials["blue.magnit"]}
            />
          </group>
          <group
            position={[258.43377686, 245.82176208, -386.99798584]}
            rotation={[0, -1.29825437, -1.7e-7]}
            scale={[0.38989586, 0.50040066, 0.39702913]}
          >
            <mesh
              geometry={nodes.Circle003_setka_0.geometry}
              material={materials.setka}
            />
          </group>
          <group
            position={[328.97055054, 245.82176208, -410.18051147]}
            rotation={[-0.07140609, -0.42683304, -0.04694861]}
            scale={[0.38989586, 0.50040072, 0.39702913]}
          >
            <mesh
              geometry={nodes.Circle004_Black_0.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Circle004_bluemagnit_0.geometry}
              material={materials["blue.magnit"]}
            />
          </group>
          <group
            position={[328.97055054, 245.82176208, -410.18051147]}
            rotation={[-0.07140609, -0.42683304, -0.04694861]}
            scale={[0.38989586, 0.50040072, 0.39702913]}
          >
            <mesh
              geometry={nodes.Circle005_setka_0.geometry}
              material={materials.setka}
            />
          </group>
          <group
            position={[253.00595093, 263.16973877, -517.01300049]}
            scale={[0.61339658, 0.67603558, 0.61339658]}
          >
            <mesh
              geometry={nodes.Cube013_wHITE_0.geometry}
              material={materials.wHITE}
            />
            <mesh
              geometry={nodes.Cube013_bluemagnit_0.geometry}
              material={materials["blue.magnit"]}
            />
          </group>
          <group
            position={[316.4420166, 19.79222298, 698.3538208]}
            rotation={[1.12457045, 0.31759993, 0.50764245]}
            scale={[1.00673056, 1.05940795, 1.00818932]}
          >
            <mesh
              geometry={nodes.Plane049_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[-663.46044922, 18.33109856, -994.55621338]}
            scale={[4.66547346, 1, 0.34585682]}
          >
            <mesh
              geometry={nodes.Plane017_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[655.19702148, 18.33109856, -994.55621338]}
            scale={[4.66547346, 1, 0.34585682]}
          >
            <mesh
              geometry={nodes.Plane055_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[245.08891296, 11.37151814, 743.18261719]}
            rotation={[-0.10080396, -0.96175642, -0.07130449]}
            scale={[1, 1, 0.99999988]}
          >
            <mesh
              geometry={nodes.Plane056_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[463.53787231, 7.99452829, 548.97094727]}
            rotation={[-0.10080396, -0.96175642, -0.07130449]}
            scale={[0.73362899, 0.73362899, 0.73362911]}
          >
            <mesh
              geometry={nodes.Plane057_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[339.52600098, 7.9950223, 632.61834717]}
            rotation={[-0.10080396, -0.96175642, -0.07130449]}
            scale={[0.73362899, 0.73362899, 0.73362911]}
          >
            <mesh
              geometry={nodes.Plane058_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[-363.0093689, 11.37151814, 822.3737793]}
            rotation={[-0.07629464, 0.71466674, 0.06152261]}
            scale={[0.99999994, 1, 1]}
          >
            <mesh
              geometry={nodes.Plane059_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[-494.27819824, 7.99452829, 626.44714355]}
            rotation={[-0.07629463, 0.71466674, 0.06152261]}
            scale={[0.73362899, 0.73362899, 0.73362917]}
          >
            <mesh
              geometry={nodes.Plane060_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[-288.82421875, 7.9950223, 577.47460938]}
            rotation={[-0.07629463, 0.71466674, 0.06152261]}
            scale={[0.73362899, 0.73362899, 0.73362917]}
          >
            <mesh
              geometry={nodes.Plane061_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[-82.67028046, 2.67698765, 1125.06213379]}
            scale={0.88467568}
          >
            <mesh
              geometry={nodes.Plane011_poster3_0.geometry}
              material={materials.poster3}
            />
          </group>
          <group
            position={[-723.74963379, 2.67698765, 699.00848389]}
            scale={1.3562392}
          >
            <mesh
              geometry={nodes.Plane065_poster3_0.geometry}
              material={materials.poster3}
            />
          </group>
          <group
            position={[-751.15155029, 12.94137383, 900.39099121]}
            scale={[1, 0.74910337, 1]}
          >
            <mesh
              geometry={nodes.Plane066_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-847.73596191, 16.20503044, 1185.99609375]}
            scale={[1, 0.91417396, 1]}
          >
            <mesh
              geometry={nodes.Plane068_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[112.89682007, 12.94137383, 900.39099121]}
            scale={[1, 0.74910337, 1]}
          >
            <mesh
              geometry={nodes.Plane069_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[213.82640076, 16.2598877, 1010.46179199]}
            scale={[1.41102052, 1.05700028, 1.41102052]}
          >
            <mesh
              geometry={nodes.Plane070_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[101.93227386, 13.84835529, 1208.24108887]}
            scale={[2.14560914, 1.05700028, 1.41102052]}
          >
            <mesh
              geometry={nodes.Plane071_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-910.28509521, 16.20503044, -948.52838135]}
            scale={[1, 0.91417396, 1]}
          >
            <mesh
              geometry={nodes.Plane067_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[245.08891296, 6.67471886, 280.7723999]}
            scale={[0.41702878, 0.41702878, 0.25077349]}
          >
            <mesh
              geometry={nodes.Plane072_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[245.08891296, 6.67471886, 502.20822144]}
            rotation={[0, -1.14449227, 0]}
            scale={[0.36466634, 0.36466628, 0.21928617]}
          >
            <mesh
              geometry={nodes.Plane073_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[-108.64136505, 6.67471886, 555.23040771]}
            rotation={[0, -1.14449227, 0]}
            scale={[0.34271809, 0.36466628, 0.1444543]}
          >
            <mesh
              geometry={nodes.Plane074_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[-831.06787109, 4.10898113, 302.42272949]}
            rotation={[0.248976, -1.15576782, 0.18040461]}
            scale={[0.4355813, 0.36798748, 0.34871778]}
          >
            <mesh
              geometry={nodes.Plane076_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[-764.22106934, 12.15152359, 663.68591309]}
            rotation={[0.248976, -1.15576782, 0.18040461]}
            scale={[0.4355813, 0.36798748, 0.34871778]}
          >
            <mesh
              geometry={nodes.Plane077_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
          <group
            position={[5.2995739, 999.03076172, 115.38923645]}
            scale={11.77376175}
          >
            <mesh
              geometry={nodes.Plane078_Black_0.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[13.17400455, 1009.92156982, 101.18202972]}
            scale={11.77376175}
          >
            <mesh
              geometry={nodes.Plane079_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[-707.71905518, 1009.6730957, 257.95004272]}>
            <mesh
              geometry={nodes.Vert001_black2_0.geometry}
              material={materials["black.2"]}
            />
          </group>
          <group position={[-282.15447998, 814.5244751, 638.33935547]}>
            <mesh
              geometry={nodes.Vert004_black2_0.geometry}
              material={materials["black.2"]}
            />
          </group>
          <group position={[-361.11602783, 814.5244751, 638.33935547]}>
            <mesh
              geometry={nodes.Vert003_black2_0.geometry}
              material={materials["black.2"]}
            />
          </group>
          <group position={[-455.22546387, 814.5244751, 638.33935547]}>
            <mesh
              geometry={nodes.Vert005_black2_0.geometry}
              material={materials["black.2"]}
            />
          </group>
          <group
            position={[579.28564453, 994.0557251, 580.1272583]}
            scale={[0.36975914, 1.63908994, 1.96350813]}
          >
            <mesh
              geometry={nodes.Plane081_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane081_lamp_0.geometry}
              material={materials.lamp}
            />
          </group>
          <group
            position={[579.28564453, 1007.394104, -370.13793945]}
            scale={[0.36975914, 1.63908994, 1.96350813]}
          >
            <mesh
              geometry={nodes.Plane080_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane080_lamp_0.geometry}
              material={materials.lamp}
            />
          </group>
          <group
            position={[-285.99105835, 1007.394104, -370.13793945]}
            scale={[0.36975914, 1.63908994, 1.96350813]}
          >
            <mesh
              geometry={nodes.Plane082_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane082_lamp_0.geometry}
              material={materials.lamp}
            />
          </group>
          <group
            position={[-255.71641541, 36.96141052, 580.1272583]}
            scale={[0.36975914, 1.63908994, 1.96350813]}
          >
            <mesh
              geometry={nodes.Plane083_metalic_0.geometry}
              material={materials.metalic}
            />
            <mesh
              geometry={nodes.Plane083_lamp_0.geometry}
              material={materials.lamp}
            />
          </group>
          <group position={[-457.24353027, 21.77573204, 428.60623169]}>
            <mesh
              geometry={nodes.Plane089_lamp2_0.geometry}
              material={materials.lamp2}
            />
          </group>
          <group
            position={[395.90383911, 11.37151814, 851.93817139]}
            rotation={[-0.10080396, -0.96175642, -0.07130449]}
            scale={[1, 1, 0.99999988]}
          >
            <mesh
              geometry={nodes.Plane075_paperwhite_0.geometry}
              material={materials["paper.white"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(url);