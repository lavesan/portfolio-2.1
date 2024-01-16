import { TagCloud } from "react-tagcloud";

import { ITagcloudComponent } from "./tagcloud.interfaces";

const TagCloudComponent = ({ data }: ITagcloudComponent) => (
  <TagCloud minSize={12} maxSize={35} tags={data} />
);

export default TagCloudComponent;
