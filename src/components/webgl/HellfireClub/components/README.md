# Importing GLTF models from Blender
1) `Alt + Ctrl + X` on objects
2) Select **Origin to Bottom**
3) `Shift + S` then select **Selection to Cursor**
4) Set rotation to all 0
5) `Ctrl + A` then select **Apply all transformation**

# Rules to adhere for GLTF objects
All GLTFs imported must have only maximum of 1 mesh hierarchy. That means the only valid structure is:
```
<group>
  <mesh />
  <mesh />
  ...
  <mesh />
</group>
```

This is invalid:
```
<group>
  <group>
    <mesh />
    <mesh />
  </group>

  <mesh />
</group>
```

## Why?
`useMover` hooks in the `HellfireClub` component adds the meshes in the first hierarchy. Of course it can be done recursively, but it's not implemented in this project for the sake of productivity.