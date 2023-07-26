import Button from '../../ui/Button';

function ConfirmDelete({ onConfirm, disabled, onCloseModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white opacity-95">
      <div className="relative z-50 flex w-3/4 flex-col gap-3 rounded-md border-2 border-teal-800 bg-teal-600 p-10 text-white shadow-xl">
        <p className="mb-3 text-base lg:text-lg">
          Are you sure you want to delete this reservation? This action cannot
          be undone.
        </p>
        <div className="flex justify-end gap-3">
          <Button type="home" disabled={disabled} onClick={onCloseModal}>
            Cancel
          </Button>
          <Button type="booking" disabled={disabled} onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
