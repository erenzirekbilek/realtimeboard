import React, { useState } from 'react';
import { NotificationCenter } from './NotificationCenter';
import { useNotifications } from '../store/notificationSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const NotificationBell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications } = useSelector(
    (state: RootState) => state.notifications
  );
  const { markAsRead, markAllAsRead } = useNotifications();

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="notification-bell">
      <button onClick={() => setIsOpen(!isOpen)} className="bell-button">
        🔔
        {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
      </button>
      {isOpen && (
        <div className="notification-dropdown">
          <NotificationCenter
            notifications={notifications}
            onMarkAsRead={markAsRead}
            onMarkAllAsRead={markAllAsRead}
          />
        </div>
      )}
    </div>
  );
};


