import React from 'react';
import { Card } from '../../../components/ui/Card';
import { NotificationItem } from './NotificationItem';
import { Notification } from '../types/notification.types';

interface NotificationCenterProps {
  notifications: Notification[];
  onMarkAsRead?: (id: string) => void;
  onMarkAllAsRead?: () => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
}) => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Card title={`Notifications (${unreadCount} unread)`} className="notification-center">
      {onMarkAllAsRead && unreadCount > 0 && (
        <button onClick={onMarkAllAsRead}>Mark all as read</button>
      )}
      <div className="notification-list">
        {notifications.length === 0 ? (
          <p>No notifications</p>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onMarkAsRead={onMarkAsRead}
            />
          ))
        )}
      </div>
    </Card>
  );
};


