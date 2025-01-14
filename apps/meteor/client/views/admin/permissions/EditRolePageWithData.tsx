import { IRole } from '@rocket.chat/core-typings';
import { Callout } from '@rocket.chat/fuselage';
import React, { ReactElement } from 'react';

import { useRouteParameter } from '../../../contexts/RouterContext';
import { useTranslation } from '../../../contexts/TranslationContext';
import EditRolePage from './EditRolePage';
import { useRole } from './hooks/useRole';

const EditRolePageWithData = ({ roleId }: { roleId?: IRole['_id'] }): ReactElement => {
	const t = useTranslation();
	const role = useRole(roleId);
	const context = useRouteParameter('context');

	if (!role && context === 'edit') {
		return <Callout type='danger'>{t('error-invalid-role')}</Callout>;
	}

	return <EditRolePage key={roleId} role={role} />;
};

export default EditRolePageWithData;
