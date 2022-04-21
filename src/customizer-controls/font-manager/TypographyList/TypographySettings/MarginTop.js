import DeviceInputGroup from './DeviceInputGroup';
import { __ } from '@wordpress/i18n';
import { getPlaceholder, getRangeProps } from '../../utils';

const MarginTop = ( { font, onChange } ) => {
	return (
		<DeviceInputGroup
			label={
				'body' === font.selector
					? __( 'Paragraph Top Margin', 'generatepress' )
					: __( 'Top Margin', 'generatepress' )
			}

			unitValue={ font.marginTopUnit }
			units={ [ 'px', 'em', 'rem' ] }
			onChangeUnit={ ( newValue ) => {
				onChange( 'marginTopUnit', newValue, font.index );
			} }

			step={ getRangeProps( font, 'marginTop', 'step', .1 ) }
			rangeMin={ getRangeProps( font, 'marginTop', 'min', 0 ) }
			rangeMax={ getRangeProps( font, 'marginTop', 'max', 5 ) }
			inputMin={ 0 }

			desktopValue={ font.marginTop }
			desktopInitial={ getPlaceholder( font, 'marginTop' ) }
			desktopOnChange={ ( newValue ) => {
				if ( 0 > newValue ) {
					newValue = 0;
				}

				onChange( 'marginTop', newValue, font.index );
			} }

			tabletValue={ font.marginTopTablet }
			tabletInitial={ getPlaceholder( font, 'marginTopTablet' ) }
			tabletOnChange={ ( newValue ) => {
				if ( 0 > newValue ) {
					newValue = 0;
				}

				onChange( 'marginTopTablet', newValue, font.index );
			} }

			mobileValue={ font.marginTopMobile }
			mobileInitial={ getPlaceholder( font, 'marginTopMobile' ) }
			mobileOnChange={ ( newValue ) => {
				if ( 0 > newValue ) {
					newValue = 0;
				}

				onChange( 'marginTopMobile', newValue, font.index );
			} }
		/>
	);
};

export default MarginTop;
