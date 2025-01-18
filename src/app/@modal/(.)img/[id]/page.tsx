import { Modal } from "./modal";
import FullPageImageView from "~/common/full-image-page";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id: photoId } = await params;

  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
    <Modal>
      <FullPageImageView photoId={idAsNumber} />
    </Modal>
  );
}
