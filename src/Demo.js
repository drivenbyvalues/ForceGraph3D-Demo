import ForceGraph3D from "react-force-graph-3d";

export default function Demo(props) {
  const data = {
    nodes: [
      {
        id: "id1",
        name: "name1",
        val: 1
      },
      {
        id: "id2",
        name: "name2",
        val: 10
      },
      {
        id: "id3",
        name: "name3",
        val: 1
      }
    ],
    links: [
      {
        source: "id1",
        target: "id2"
      },
      {
        source: "id1",
        target: "id3"
      }
    ]
  };
  return (
    <ForceGraph3D
      linkDirectionalArrowLength={3}
      linkDirectionalArrowRelPos={1}
      graphData={data}
    />
  );
}
