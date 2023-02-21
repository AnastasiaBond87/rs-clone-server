import { ImageSchema } from '../../models/types';
import { userModel } from '../../models/user-model';

export const getUserAvatar = async (userId: number): Promise<ImageSchema> => {
  const user = await userModel.findOne({ userId });

  if (!user || user.images.avatar == null) {
    throw new Error('Not Found');
  }

  return user.images.avatar;
};