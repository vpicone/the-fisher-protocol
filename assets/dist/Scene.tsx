/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    CommodeRetro01_baked_Malla: THREE.Mesh
    Flag01_baked_Malla010: THREE.Mesh
    DoorMolding01_baked_Malla022: THREE.Mesh
    ChairRetro02_1_baked_Malla025: THREE.Mesh
    props_A_baked_Malla026: THREE.Mesh
    GrandfatherClock_baked_Malla028: THREE.Mesh
    TableRetro04_baked_Malla038: THREE.Mesh
    PictureFrame02_baked_Malla042: THREE.Mesh
    ChairRetro03_baked_Malla069: THREE.Mesh
    ['PotFlowers01_Malla073-Mesh']: THREE.Mesh
    ['PotFlowers01_Malla073-Mesh_1']: THREE.Mesh
    RetroBooks_baked_Malla089: THREE.Mesh
    ChairRetro05_2_baked_Malla100: THREE.Mesh
    Walls_DoorR_Malla007: THREE.Mesh
    PhotoFrame_baked_Malla041: THREE.Mesh
    Outdoors_Esfera: THREE.Mesh
    LeftSofa_SofaRetro04_Pillow_baked_Malla003: THREE.Mesh
    RightSofa_SofaRetro04_Pillow_baked_Malla007: THREE.Mesh
    ChairRetro03_baked_Malla001: THREE.Mesh
    ChairRetro05_2_baked_Malla001: THREE.Mesh
    ChairRetro05_2_baked_Malla002: THREE.Mesh
    ChairRetro05_2_baked_Malla003: THREE.Mesh
    ChairRetro05_2_baked_Malla004: THREE.Mesh
    ChairRetro05_2_baked_Malla005: THREE.Mesh
    DoorMolding01_baked_Malla001: THREE.Mesh
    Window_baked_Malla001: THREE.Mesh
    ['props_A_baked_Malla001-Mesh']: THREE.Mesh
    ['props_A_baked_Malla001-Mesh_1']: THREE.Mesh
    ['props_A_baked_Malla001-Mesh_2']: THREE.Mesh
    ['ResoluteDesk_baked_Malla001-Mesh']: THREE.Mesh
    ['ResoluteDesk_baked_Malla001-Mesh_1']: THREE.Mesh
    ['TableRetro04_baked_Malla001-Mesh']: THREE.Mesh
    ['TableRetro04_baked_Malla001-Mesh_1']: THREE.Mesh
    ['TableRetro04_baked_Malla001-Mesh_2']: THREE.Mesh
    ['LightTableRetro02On_baked_Malla001-Mesh']: THREE.Mesh
    ['LightTableRetro02On_baked_Malla001-Mesh_1']: THREE.Mesh
    ['LightTableRetro02On_baked_Malla002-Mesh']: THREE.Mesh
    ['LightTableRetro02On_baked_Malla002-Mesh_1']: THREE.Mesh
    ['props_A_baked_Malla002_props_A_baked_Malla004-Mesh']: THREE.Mesh
    ['props_A_baked_Malla002_props_A_baked_Malla004-Mesh_1']: THREE.Mesh
    ['props_A_baked_Malla002_props_A_baked_Malla004-Mesh_2']: THREE.Mesh
    PictureFrame02_baked_Malla002_PictureFrame02_baked_Malla003: THREE.Mesh
    ['TableRetro04_baked_Malla006-Mesh']: THREE.Mesh
    ['TableRetro04_baked_Malla006-Mesh_1']: THREE.Mesh
    ['TableRetro04_baked_Malla006-Mesh_2']: THREE.Mesh
    WallShelves01_baked_Malla001: THREE.Mesh
    WallShelves01_baked_Malla002: THREE.Mesh
    WallShelves01_baked_Malla003: THREE.Mesh
    WallShelves01_baked_Malla004: THREE.Mesh
    ['WallShelves01_baked_Malla005-Mesh']: THREE.Mesh
    ['WallShelves01_baked_Malla005-Mesh_1']: THREE.Mesh
    WallShelves01_baked_Malla006: THREE.Mesh
    WallShelves01_baked_Malla007: THREE.Mesh
    OvalCurtain01_baked_Malla001: THREE.Mesh
    OvalCurtain01_baked_Malla002: THREE.Mesh
    OvalCurtain01_baked_Malla003: THREE.Mesh
    OvalCurtain01_baked_Malla004: THREE.Mesh
    OvalCurtain01_baked_Malla005: THREE.Mesh
    PictureFrame02_baked_Malla001_PictureFrame02_baked_Malla005: THREE.Mesh
  }
  materials: {
    commode: THREE.MeshBasicMaterial
    flags: THREE.MeshBasicMaterial
    molding: THREE.MeshBasicMaterial
    principal_chair: THREE.MeshBasicMaterial
    props_A: THREE.MeshBasicMaterial
    clock: THREE.MeshBasicMaterial
    tables_A: THREE.MeshBasicMaterial
    pictures_A: THREE.MeshBasicMaterial
    chair_S1: THREE.MeshBasicMaterial
    flowers_pots: THREE.MeshBasicMaterial
    fireplace: THREE.MeshBasicMaterial
    props_B: THREE.MeshBasicMaterial
    chair_S2: THREE.MeshBasicMaterial
    office: THREE.MeshBasicMaterial
    pictures_B: THREE.MeshBasicMaterial
    enviroment: THREE.MeshBasicMaterial
    sofa: THREE.MeshBasicMaterial
    door_S1: THREE.MeshBasicMaterial
    resolute_desk: THREE.MeshBasicMaterial
    lamps: THREE.MeshBasicMaterial
    shelves: THREE.MeshBasicMaterial
    curtains: THREE.MeshBasicMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/scene-transformed.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.CommodeRetro01_baked_Malla.geometry} material={nodes.CommodeRetro01_baked_Malla.material} />
      <mesh geometry={nodes.Flag01_baked_Malla010.geometry} material={materials.flags} />
      <mesh
        geometry={nodes.DoorMolding01_baked_Malla022.geometry}
        material={nodes.DoorMolding01_baked_Malla022.material}
      />
      <mesh geometry={nodes.ChairRetro02_1_baked_Malla025.geometry} material={materials.principal_chair} />
      <mesh geometry={nodes.props_A_baked_Malla026.geometry} material={nodes.props_A_baked_Malla026.material} />
      <mesh geometry={nodes.GrandfatherClock_baked_Malla028.geometry} material={materials.clock} />
      <mesh
        geometry={nodes.TableRetro04_baked_Malla038.geometry}
        material={nodes.TableRetro04_baked_Malla038.material}
      />
      <mesh
        geometry={nodes.PictureFrame02_baked_Malla042.geometry}
        material={nodes.PictureFrame02_baked_Malla042.material}
      />
      <mesh
        geometry={nodes.ChairRetro03_baked_Malla069.geometry}
        material={nodes.ChairRetro03_baked_Malla069.material}
      />
      <mesh
        geometry={nodes['PotFlowers01_Malla073-Mesh'].geometry}
        material={nodes['PotFlowers01_Malla073-Mesh'].material}
      />
      <mesh geometry={nodes['PotFlowers01_Malla073-Mesh_1'].geometry} material={materials.fireplace} />
      <mesh geometry={nodes.RetroBooks_baked_Malla089.geometry} material={materials.props_B} />
      <mesh
        geometry={nodes.ChairRetro05_2_baked_Malla100.geometry}
        material={nodes.ChairRetro05_2_baked_Malla100.material}
      />
      <mesh geometry={nodes.Walls_DoorR_Malla007.geometry} material={materials.office} />
      <mesh geometry={nodes.PhotoFrame_baked_Malla041.geometry} material={materials.pictures_B} />
      <mesh geometry={nodes.Outdoors_Esfera.geometry} material={materials.enviroment} />
      <mesh
        geometry={nodes.LeftSofa_SofaRetro04_Pillow_baked_Malla003.geometry}
        material={nodes.LeftSofa_SofaRetro04_Pillow_baked_Malla003.material}
      />
      <mesh
        geometry={nodes.RightSofa_SofaRetro04_Pillow_baked_Malla007.geometry}
        material={nodes.RightSofa_SofaRetro04_Pillow_baked_Malla007.material}
      />
      <mesh
        geometry={nodes.ChairRetro03_baked_Malla001.geometry}
        material={nodes.ChairRetro03_baked_Malla001.material}
      />
      <mesh
        geometry={nodes.ChairRetro05_2_baked_Malla001.geometry}
        material={nodes.ChairRetro05_2_baked_Malla001.material}
      />
      <mesh
        geometry={nodes.ChairRetro05_2_baked_Malla002.geometry}
        material={nodes.ChairRetro05_2_baked_Malla002.material}
      />
      <mesh
        geometry={nodes.ChairRetro05_2_baked_Malla003.geometry}
        material={nodes.ChairRetro05_2_baked_Malla003.material}
      />
      <mesh
        geometry={nodes.ChairRetro05_2_baked_Malla004.geometry}
        material={nodes.ChairRetro05_2_baked_Malla004.material}
      />
      <mesh
        geometry={nodes.ChairRetro05_2_baked_Malla005.geometry}
        material={nodes.ChairRetro05_2_baked_Malla005.material}
      />
      <mesh
        geometry={nodes.DoorMolding01_baked_Malla001.geometry}
        material={nodes.DoorMolding01_baked_Malla001.material}
      />
      <mesh geometry={nodes.Window_baked_Malla001.geometry} material={nodes.Window_baked_Malla001.material} />
      <mesh
        geometry={nodes['props_A_baked_Malla001-Mesh'].geometry}
        material={nodes['props_A_baked_Malla001-Mesh'].material}
      />
      <mesh
        geometry={nodes['props_A_baked_Malla001-Mesh_1'].geometry}
        material={nodes['props_A_baked_Malla001-Mesh_1'].material}
      />
      <mesh
        geometry={nodes['props_A_baked_Malla001-Mesh_2'].geometry}
        material={nodes['props_A_baked_Malla001-Mesh_2'].material}
      />
      <mesh geometry={nodes['ResoluteDesk_baked_Malla001-Mesh'].geometry} material={materials.resolute_desk} />
      <mesh
        geometry={nodes['ResoluteDesk_baked_Malla001-Mesh_1'].geometry}
        material={nodes['ResoluteDesk_baked_Malla001-Mesh_1'].material}
      />
      <mesh
        geometry={nodes['TableRetro04_baked_Malla001-Mesh'].geometry}
        material={nodes['TableRetro04_baked_Malla001-Mesh'].material}
      />
      <mesh
        geometry={nodes['TableRetro04_baked_Malla001-Mesh_1'].geometry}
        material={nodes['TableRetro04_baked_Malla001-Mesh_1'].material}
      />
      <mesh
        geometry={nodes['TableRetro04_baked_Malla001-Mesh_2'].geometry}
        material={nodes['TableRetro04_baked_Malla001-Mesh_2'].material}
      />
      <mesh
        geometry={nodes['LightTableRetro02On_baked_Malla001-Mesh'].geometry}
        material={nodes['LightTableRetro02On_baked_Malla001-Mesh'].material}
      />
      <mesh
        geometry={nodes['LightTableRetro02On_baked_Malla001-Mesh_1'].geometry}
        material={nodes['LightTableRetro02On_baked_Malla001-Mesh_1'].material}
      />
      <mesh
        geometry={nodes['LightTableRetro02On_baked_Malla002-Mesh'].geometry}
        material={nodes['LightTableRetro02On_baked_Malla002-Mesh'].material}
      />
      <mesh
        geometry={nodes['LightTableRetro02On_baked_Malla002-Mesh_1'].geometry}
        material={nodes['LightTableRetro02On_baked_Malla002-Mesh_1'].material}
      />
      <mesh
        geometry={nodes['props_A_baked_Malla002_props_A_baked_Malla004-Mesh'].geometry}
        material={nodes['props_A_baked_Malla002_props_A_baked_Malla004-Mesh'].material}
      />
      <mesh
        geometry={nodes['props_A_baked_Malla002_props_A_baked_Malla004-Mesh_1'].geometry}
        material={nodes['props_A_baked_Malla002_props_A_baked_Malla004-Mesh_1'].material}
      />
      <mesh
        geometry={nodes['props_A_baked_Malla002_props_A_baked_Malla004-Mesh_2'].geometry}
        material={nodes['props_A_baked_Malla002_props_A_baked_Malla004-Mesh_2'].material}
      />
      <mesh
        geometry={nodes.PictureFrame02_baked_Malla002_PictureFrame02_baked_Malla003.geometry}
        material={nodes.PictureFrame02_baked_Malla002_PictureFrame02_baked_Malla003.material}
      />
      <mesh
        geometry={nodes['TableRetro04_baked_Malla006-Mesh'].geometry}
        material={nodes['TableRetro04_baked_Malla006-Mesh'].material}
      />
      <mesh
        geometry={nodes['TableRetro04_baked_Malla006-Mesh_1'].geometry}
        material={nodes['TableRetro04_baked_Malla006-Mesh_1'].material}
      />
      <mesh
        geometry={nodes['TableRetro04_baked_Malla006-Mesh_2'].geometry}
        material={nodes['TableRetro04_baked_Malla006-Mesh_2'].material}
      />
      <mesh
        geometry={nodes.WallShelves01_baked_Malla001.geometry}
        material={nodes.WallShelves01_baked_Malla001.material}
      />
      <mesh
        geometry={nodes.WallShelves01_baked_Malla002.geometry}
        material={nodes.WallShelves01_baked_Malla002.material}
      />
      <mesh
        geometry={nodes.WallShelves01_baked_Malla003.geometry}
        material={nodes.WallShelves01_baked_Malla003.material}
      />
      <mesh
        geometry={nodes.WallShelves01_baked_Malla004.geometry}
        material={nodes.WallShelves01_baked_Malla004.material}
      />
      <mesh
        geometry={nodes['WallShelves01_baked_Malla005-Mesh'].geometry}
        material={nodes['WallShelves01_baked_Malla005-Mesh'].material}
      />
      <mesh
        geometry={nodes['WallShelves01_baked_Malla005-Mesh_1'].geometry}
        material={nodes['WallShelves01_baked_Malla005-Mesh_1'].material}
      />
      <mesh
        geometry={nodes.WallShelves01_baked_Malla006.geometry}
        material={nodes.WallShelves01_baked_Malla006.material}
      />
      <mesh
        geometry={nodes.WallShelves01_baked_Malla007.geometry}
        material={nodes.WallShelves01_baked_Malla007.material}
      />
      <mesh
        geometry={nodes.OvalCurtain01_baked_Malla001.geometry}
        material={nodes.OvalCurtain01_baked_Malla001.material}
      />
      <mesh
        geometry={nodes.OvalCurtain01_baked_Malla002.geometry}
        material={nodes.OvalCurtain01_baked_Malla002.material}
      />
      <mesh
        geometry={nodes.OvalCurtain01_baked_Malla003.geometry}
        material={nodes.OvalCurtain01_baked_Malla003.material}
      />
      <mesh
        geometry={nodes.OvalCurtain01_baked_Malla004.geometry}
        material={nodes.OvalCurtain01_baked_Malla004.material}
      />
      <mesh
        geometry={nodes.OvalCurtain01_baked_Malla005.geometry}
        material={nodes.OvalCurtain01_baked_Malla005.material}
      />
      <mesh
        geometry={nodes.PictureFrame02_baked_Malla001_PictureFrame02_baked_Malla005.geometry}
        material={nodes.PictureFrame02_baked_Malla001_PictureFrame02_baked_Malla005.material}
      />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
