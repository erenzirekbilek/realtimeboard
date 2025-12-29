import React, { useState } from 'react';
import { Modal } from '../../../common/Modal';
import { Input } from '../../../common/Input';
import { Button } from '../../../common/Button';
import { FormGroup } from '../../../ui/FormGroup';

interface BanUserModalProps {
  userId: string;
  userName: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
  loading?: boolean;
}

export const BanUserModal: React.FC<BanUserModalProps> = ({
  userId,
  userName,
  isOpen,
  onClose,
  onConfirm,
  loading = false,
}) => {
  const [reason, setReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(reason);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Ban User">
      <form onSubmit={handleSubmit}>
        <p>Are you sure you want to ban {userName}?</p>
        <FormGroup label="Reason" required>
          <Input
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter ban reason"
            required
          />
        </FormGroup>
        <div className="modal-actions">
          <Button type="button" variant="text" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="error" loading={loading}>
            Ban User
          </Button>
        </div>
      </form>
    </Modal>
  );
};


